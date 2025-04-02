import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "../../../components/Message";
import useRequestData from "../../../hooks/useRequestData";

const EditRecipe = () => {
  const { id } = useParams();

  //get
  const { makeRequest, isLoading, data, error } = useRequestData();
  //put
  const {
    makeRequest: makeRequestPut,
    isLoading: puttin,
    data: putData,
    error: noPut,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://127.0.0.1:5020/api/coffeerecipes/" + id, "GET");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    makeRequestPut(
      "http://127.0.0.1:5020/api/coffeerecipes/" + id,
      "PUT",
      e.target
    );
  };

  return (
    <section>
      <h2>ret opskriften</h2>
      {putData && (
        <Message
          messageText={
            "opskriften er oprettet med følgene title '" + putData.title + "'"
          }
        />
      )}

      {isLoading || (puttin && <h2>loading</h2>)}

      {error || (noPut && <h2>Error</h2>)}

      {data && (
        <form className="flex flex-row justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>
              Title
              <input
                type="text"
                defaultValue={data.title}
                name="title"
                placeholder="indtast title her"
              />
            </label>
            <label>
              description
              <textarea
                type="text"
                name="description"
                defaultValue={data.description}
                placeholder="description"
              />
            </label>
            <label>
              recipe
              <textarea
                type="text"
                defaultValue={data.recipe}
                name="recipe"
                placeholder="recipe"
              />
            </label>
            <label>
              <p>
                nuværne billede
                <img
                  src={"http://127.0.0.1:5020/uploads/" + data.image}
                  alt={"foto af" + data.title}
                  className="w-80"
                />
              </p>
              vælg evt ny billede
              <input type="file" name="image" />
            </label>

            <button type="submit">RATS opskrift</button>
          </div>
        </form>
      )}
    </section>
  );
};

export default EditRecipe;
