import { React, useEffect, useState } from "react";
import { Avatar, Card} from "antd";
import { Link, useLocation } from "react-router-dom";

const UserPage = () => {
  const location = useLocation();
  const card = location.state;

  const [user, setUser] = useState({});
  const [repos, setRepo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get user image, name, and location
    card &&
      fetch(card.url)
        .then((res) => res.json())
        .then((data) =>
          setUser({
            id: data.id,
            name: data.name,
            location: data.location,
            image: data.avatar_url,
          })
        );
    // get user repositories
    card &&
      fetch(card.repos_url)
        .then((res) => res.json())
        .then((data) => {
          setRepo(
            data
              .map((repo) => ({
                name: repo.name,
                description: repo.description,
              }))
              .slice(0, 3)
          );
        });
    setLoading(!repos && !user);
  }, [card]);

  const { Meta } = Card;

  return (
    <div style={{display:"flex",justifyContent:"center", marginTop: "10%"}}>
      <Card
        bordered={true}
        style={{
          boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
        }}
        loading={loading}
      >
        <Meta
          avatar={<Avatar src={user.image} size={128} />}
          title={user.name}
          // title="akjsdhjzhbcjhgS"
          description={user.location}
          // description="2918739827983iuhdkajshduygauysfgoiuwyriasbfdyg"
        />

        <ul style={{ marginLeft: 100 }}>
          <div>Repositories:</div>
          {repos.map((repo) => (
            <li
              className="cardText"
              style={{ color: "dodgerblue" }}
              key={repo.name}
            >
              {repo.name}
              <div style={{ color: "black" }}>{repo.description}</div>
            </li>
          ))}
        </ul>
        <Link style={{ float: "right", marginRight: "2%" }} to="/user">
          back
        </Link>
      </Card>
      
    </div>
  );
};

export default UserPage;
