import { useParams } from "react-router-dom";
import Info from "../components/Info";

function DetailPage() {
  const movieId = useParams();

  return (
    <div>
      <Info movieId={movieId} />
    </div>
  );
}

export default DetailPage;
