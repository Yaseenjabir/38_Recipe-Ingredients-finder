const SingleRecipeItem = ({ item }) => {
  return (
    <>
      <div className="singleRecipe">
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%", height: "160px" }}
            src={item.image_url}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 5px",
          }}
        >
          <p
            style={{
              marginBottom: "0px",
              fontSize: "15px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {item.title}
          </p>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "600",
              margin: "5px 0px 20px 0px",
            }}
          >
            {item.publisher}
          </h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button
              onClick={() =>
                window.open(`/recipes/${item.recipe_id}`, "_blank")
              }
              type="button"
              className="btn btn-primary"
            >
              Details
            </button>
            <button
              onClick={() => window.open(item.publisher_url, "_blank")}
              type="button"
              className="btn btn-success"
            >
              Recipe Url
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRecipeItem;
