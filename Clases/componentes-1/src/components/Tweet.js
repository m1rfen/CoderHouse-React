import Avatar from "./Avatar";
import Card from "./Card";

const Tweet = ({author}) => {
  return (
    <Card>
      <Avatar src="https://via.placeholder.com/250x250" />
      
      <h2>{author}</h2>
      <p>Voy a lanzar un cohete a Marte que va a traer petróleo a la tierra</p>
    </Card>
  );
};

export default Tweet
