import React, { useState, useEffect } from 'react';
import { ref, onValue, push, set } from 'firebase/database';
import { db } from "../firebase" // Sesuaikan path

const DiscussionSection = () => {
  // Daftar kata kasar
  const blockedWords = [
    'anjing', 'bangsat', 'kontol', 'memek', 'goblok',
    'babi', 'setan', 'kampret', 'asu',
    'shit', 'bitch', 'asshole', 'damn'
  ];

  // Cek kata terlarang
  const containsBlockedWords = (text) => {
    const lowerText = text.toLowerCase();
    return blockedWords.some(word => lowerText.includes(word));
  };

  // Sensor otomatis
  const censorText = (text) => {
    return text
      .replace(/\bfuck\b/gi, 'f**k')
      .replace(/\btolol\b/gi, 't***l')
      .replace(/\bgoblok\b/gi, 'g****k')
      .replace(/\bbangsat\b/gi, 'b*****t')
      .replace(/\bkontol\b/gi, 'k****l');
  };

  // Emoji cepat
  const quickEmojis = ['😊', '👍', '🎉', '👏', '❤️', '🤔', '😂', '🔥'];

  // Warna acak
  const getRandomColor = () => {
    const colors = [
      'text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600',
      'text-yellow-600', 'text-indigo-600', 'text-pink-600', 'text-teal-600'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Format waktu
  const formatTimeAgo = (timestamp) => {
    const now = Date.now();
    const diffInMs = now - timestamp;
    const diffInMin = Math.floor(diffInMs / 60000);
    const diffInHour = Math.floor(diffInMin / 60);
    const diffInDay = Math.floor(diffInHour / 24);

    if (diffInMin < 1) return 'baru saja';
    if (diffInMin < 60) return `${diffInMin} menit lalu`;
    if (diffInHour < 24) return `${diffInHour} jam lalu`;
    if (diffInDay < 7) return `${diffInDay} hari lalu`;
    return 'lebih dari seminggu lalu';
  };

  // State
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', text: '' });
  const [replyingTo, setReplyingTo] = useState(null);
  const [newReply, setNewReply] = useState({ name: '', text: '' });

  // Load data dari Firebase
  useEffect(() => {
    const commentsRef = ref(db, 'comments');
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedComments = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setComments(loadedComments.reverse()); // Terbaru di atas
      } else {
        setComments([]);
      }
    });
  }, []);

  // Kirim komentar baru
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.text.trim()) return;

    if (containsBlockedWords(newComment.text)) {
      alert('Komentar Anda mengandung kata yang tidak diperbolehkan.');
      return;
    }

    const newId = push(ref(db, 'comments')).key;

    const comment = {
      id: newId,
      name: newComment.name,
      text: censorText(newComment.text),
      color: getRandomColor(),
      timestamp: Date.now(),
      replies: {}
    };

    await set(ref(db, 'comments/' + newId), comment);
    setNewComment({ name: '', text: '' });
  };

  // Kirim balasan
  const handleReplySubmit = async (e, parentId) => {
    e.preventDefault();
    if (!newReply.name.trim() || !newReply.text.trim()) return;

    if (containsBlockedWords(newReply.text)) {
      alert('Balasan Anda mengandung kata yang tidak diperbolehkan.');
      return;
    }

    const replyId = push(ref(db, `comments/${parentId}/replies`)).key;

    const reply = {
      id: replyId,
      name: newReply.name,
      text: censorText(newReply.text),
      color: getRandomColor(),
      timestamp: Date.now()
    };

    await set(ref(db, `comments/${parentId}/replies/${replyId}`), reply);
    setNewReply({ name: '', text: '' });
    setReplyingTo(null);
  };

  // Tambah emoji
  const addEmojiToComment = (emoji) => {
    setNewComment(prev => ({ ...prev, text: prev.text + emoji }));
  };

  const addEmojiToReply = (emoji) => {
    setNewReply(prev => ({ ...prev, text: prev.text + emoji }));
  };

  // Render komentar
  const renderComments = (items) => {
    return items.map((comment) => (
      <div key={comment.id} className="mb-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className={`font-semibold ${comment.color}`}>{comment.name}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">{comment.text}</p>
          <p className="text-xs text-gray-500 mt-1">{formatTimeAgo(comment.timestamp)}</p>
          <button
            onClick={() => setReplyingTo(comment.id)}
            className="mt-2 text-sm text-sky-600 hover:underline"
          >
            Balas
          </button>
        </div>

        {/* Form Balas */}
        {replyingTo === comment.id && (
          <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="mt-2 ml-6">
            <input
              type="text"
              name="name"
              value={newReply.name}
              onChange={(e) => setNewReply({ ...newReply, name: e.target.value })}
              placeholder="Nama kamu"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400 mb-2"
              required
            />
            <div className="flex gap-1 mb-2 flex-wrap">
              {quickEmojis.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => addEmojiToReply(emoji)}
                  className="text-lg hover:bg-sky-100 px-1 rounded"
                >
                  {emoji}
                </button>
              ))}
            </div>
            <textarea
              name="text"
              value={newReply.text}
              onChange={(e) => setNewReply({ ...newReply, text: e.target.value })}
              rows="2"
              placeholder="Tulis balasan kamu..."
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400 mb-2"
              required
            />
            <button
              type="submit"
              className="text-sm bg-sky-100 text-sky-700 px-3 py-1 rounded hover:bg-sky-200"
            >
              Kirim Balasan
            </button>
          </form>
        )}

        {/* Balasan */}
        {comment.replies && Object.keys(comment.replies).length > 0 && (
          <div className="ml-6 mt-2 border-l-2 border-sky-200 pl-4">
            {renderComments(Object.values(comment.replies))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <section id="diskusi" className="py-16 bg-sky-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-sky-600">Saling Berdiskusi</h2>

        {/* Form Komentar */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4 text-sky-700">Tinggalkan Komentar</h3>
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                placeholder="Nama kamu"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <div className="flex gap-1 mb-2 flex-wrap">
                {quickEmojis.map(emoji => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => addEmojiToComment(emoji)}
                    className="text-lg hover:bg-sky-100 px-1 rounded"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <textarea
                name="text"
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                rows="3"
                placeholder="Tulis komentar atau pertanyaan kamu... 😊"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition duration-300"
            >
              Kirim Komentar
            </button>
          </form>
        </div>

        {/* Daftar Diskusi */}
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-sky-700 mb-4">Diskusi</h3>
          {comments.length === 0 ? (
            <p className="text-gray-500 italic">Belum ada komentar. Jadilah yang pertama bertanya!</p>
          ) : (
            renderComments(comments)
          )}
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;