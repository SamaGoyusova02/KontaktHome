function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <ul className="flex items-center gap-3 px-3 lg:px-9 overflow-x-auto flex-nowrap md:flex-wrap lg:flex-wrap  md:overflow-x-visible [--webkit-scrollbar]:hidden  py-2">
      <li
        onClick={() => onSelectCategory(null)}
        className={`px-5 py-2 rounded-full cursor-pointer font-[Montserrat,_sans-serif] text-[13px] font-[500] whitespace-nowrap shrink-0 transition-all ${
          selectedCategory === null
            ? 'bg-[#323232] text-white'
            : 'bg-[#eaeaea] text-[#4b5563] hover:bg-[#323232] hover:text-white'
        }`}
      >
        Bütün məhsullar
      </li>

  
      {categories &&
        categories.map((item) => {
          const isActive = selectedCategory === item.categoryName;

          return (
            <li
              key={item.id}
              onClick={() => onSelectCategory(item.categoryName)}
              className={`px-5 py-2 rounded-full cursor-pointer  text-[13px] font-[Montserrat,_sans-serif] font-[500] whitespace-nowrap shrink-0 transition-all ${
                isActive
                  ? 'bg-[#323232] text-white'
                  : 'bg-[#eaeaea] text-[#4b5563]  hover:bg-[#323232] hover:text-white'
              }`}
            >
              {item.categoryName}
            </li>
          );
        })}
    </ul>
  );
}

export default CategoryList;