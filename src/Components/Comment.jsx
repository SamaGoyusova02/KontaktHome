import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function Comment({ product }) {
  if (!product || product.rating === "0.0" || product.rating === 0 || product.rating === "0") {
    return null;
  }

  const initialReviews = [
    {
      id: 1,
      name: "Ayxan",
      date: "12.01.2025",
      rating: 5,
      text: "Məhsul gözlədiyimdən də yaxşı çıxdı, keyfiyyəti superdir."
    },
    {
      id: 2,
      name: "Nigar",
      date: "15.02.2025",
      rating: 5,
      text: "Çatdırılma sürətli idi, qablaşdırma əla. Təşəkkürlər!"
    },
    {
      id: 3,
      name: "Rauf",
      date: "20.02.2025",
      rating: 4,
      text: "Ümumi olaraq yaxşıdır, qiymətinə görə dəyər."
    },
    {
      id: 4,
      name: "Leyla",
      date: "01.03.2025",
      rating: 5,
      text: "Çox bəyəndim, hər kəsə tövsiyə edirəm. Problem yaşamadım."
    },
    {
      id: 5,
      name: "Samir",
      date: "01.03.2025",
      rating: 5,
      text: "Problem yaşamadım."
    },
    {
      id: 6,
      name: "Ruhiyə",
      date: "01.03.2025",
      rating: 5,
      text: "Çox bəyəndim, hər kəsə tövsiyə edirəm."
    }
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [newComment, setNewComment] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const addedReview = {
      id: Date.now(),
      name: "İstifadəçi",
      date: new Date().toLocaleDateString(),
      rating: 5,
      text: newComment
    };

    setReviews([addedReview, ...reviews]);
    setNewComment("");
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div  className="bg-white rounded-2xl p-4 lg:p-6 lg:mx-5 lg:mt-13 font-[Montserrat,_sans-serif]">
      <hr className='text-[#a394944d] mb-7 md:hidden lg:hidden' />
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-[18px] lg:text-[20px] font-[600] text-[#323232]">
          Rəylər ({reviews.length})
        </h3>
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <span className="font-[600] text-[16px] text-[#323232]">{product.rating}</span>
        <div className="flex text-[#ff9933] text-[14px]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center mb-8 gap-3 lg:gap-0">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Rəy yaz"
          className="flex-1 w-full bg-[#f7f5f5] border border-transparent focus:border-gray-300 lg:rounded-tl-[10px] lg:rounded-bl-[10px] rounded-[10px] px-4 py-5 text-[14px] outline-none transition-all"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 lg:py-5 py-3 border bg-white border-[#323232] text-[#323232] lg:rounded-tr-[10px] lg:rounded-br-[10px] rounded-[10px] font-[500] text-[14px] transition-colors cursor-pointer lg:-ml-2"
        >
          Göndər
        </button>
      </form>

      <div className="flex flex-col gap-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b border-[#f3f3f3] pb-6 last:border-none last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#007fac] text-white flex items-center justify-center font-[600] text-[16px]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-[600] text-[14px] text-[#323232]">{review.name}</h4>
                  <span className="text-[11px] text-[#777777]">{review.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex text-[#ff9933] text-[12px]">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(review.id)}
                  className="text-[12px] text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
                >
                  Sil
                </button>
              </div>
            </div>

            <p className="text-[13px] text-[#323232] mt-2 leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>
      {reviews.length > 2 && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="w-full mt-6 bg-[#f7f5f5] hover:bg-[#eaeaea] text-[#323232] py-3 rounded-[10px] font-[500] text-[13px] transition-colors cursor-pointer"
        >
          {showAll ? "Daha az göstər ..." : "Hamısını göstər ..."}
        </button>
      )}
    </div>
  );
}

export default Comment;