import React from "react";
import Post from "./Post";

const PostSection = () => {
  const posts = [
    {
      id: 1,
      username: "Gia Jakes",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper tellus et tortor ultricies eleifend. Cras consequat libero ac luctus congue. Integer vitae libero sit amet quam ullamcorper fringilla. Nam id dapibus quam. Nullam lacinia augue ac convallis feugiat. Vestibulum sed mi non nunc ullamcorper tempor. Vestibulum vestibulum tortor eget neque varius, eu varius nisl sagittis. Duis nec nunc eu turpis tincidunt blandit.",
      post_type: "image",
      post_data:
        "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b",
      no_of_likes: 10,
      comments: [
        { username: "user2", comment: "Great post!" },
        { username: "user3", comment: "Nice picture!" },
      ],
    },
    {
      id: 2,
      username: "Jane Watson",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu odio vitae arcu cursus vestibulum. Proin ut quam vitae velit pretium convallis. Ut sed lorem eget sem dictum fermentum. Nullam faucibus feugiat sapien, et lobortis ligula tincidunt id. Integer luctus, nulla nec suscipit tempor, ipsum felis varius purus, vel fermentum purus leo sit amet libero. Mauris sed mi vel justo ultricies tristique. Nulla ultrices urna id lectus aliquet auctor.",
      post_type: "image",
      post_data:
        "https://campustechnology.com/-/media/EDU/CampusTechnology/2020-images/20200227hackathon.jpg",
      no_of_likes: 20,
      comments: [
        { username: "user1", comment: "Beautiful!" },
        { username: "user3", comment: "Love this!" },
      ],
    },
    {
      id: 3,
      username: "Jannny Shoms",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu odio vitae arcu cursus vestibulum. Proin ut quam vitae velit pretium convallis. Ut sed lorem eget sem dictum fermentum. Nullam faucibus feugiat sapien, et lobortis ligula tincidunt id. Integer luctus, nulla nec suscipit tempor, ipsum felis varius purus, vel fermentum purus leo sit amet libero. Mauris sed mi vel justo ultricies tristique. Nulla ultrices urna id lectus aliquet auctor.",
      post_type: "video",
      post_data:
        "https://campustechnology.com/-/media/EDU/CampusTechnology/2020-images/20200227hackathon.jpg",
      no_of_likes: 20,
      comments: [
        { username: "user1", comment: "Beautiful!" },
        { username: "user3", comment: "Love this!" },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default PostSection;
