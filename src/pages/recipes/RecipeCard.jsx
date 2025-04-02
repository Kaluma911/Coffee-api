import DOMPurify from "dompurify";
import React from "react";

const RecipeCard = ({ r }) => {
  const htmlContent = r.description;
  const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);
  return (
    <div className="p-4 m-4 rounded relative border-white border ">
      <img
        src={"http://127.0.0.1:5020/uploads/" + r.image}
        alt={"foto af" + r.title}
        className="w-full"
      />
      <h4>{r.title}</h4>
      {/* <p>{r.description}</p> */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}></div>
      <button className="inline-block px-4 py-2 mt-5 mb-10 mr-4 font-bold text-white rounded bg-rose-500 hover:bg-rose-700">
        læs mere
      </button>
    </div>
  );
};

export default RecipeCard;
