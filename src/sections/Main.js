import React from "react";

export default function Main() {
  const posts = [
    {
      id: 1,
      name: "Kylie Jenner",
      url: "https://assets.teenvogue.com/photos/55c8e4f5657d5f2b1661e043/4:3/w_1080,h_810,c_limit/kylie-jenner-high-fashion-photo-shoot-00.jpg",
      sources: [
        {
          id: 1,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 2,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 3,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 4,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 5,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 6,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 7,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 8,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Kendall Jenner",
      url: "https://i.pinimg.com/736x/d2/25/82/d22582634042b6bc4557d28310af5779.jpg",
      sources: [
        {
          id: 1,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 2,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 3,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 4,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 5,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 6,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 7,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 8,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Kim Kardashian",
      url: "https://caroseditorial.com/wp-content/uploads/2021/05/Black-male-model-fashion-photoshoot-8-683x1024.jpg",
      sources: [
        {
          id: 1,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 2,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 3,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 4,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 5,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 6,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 7,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 8,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Kourtney Kardashian",
      url: "https://media.istockphoto.com/id/1387549302/photo/caucasian-woman-portrait-in-black-and-white.jpg?s=612x612&w=0&k=20&c=EoY0iPCfin1QvS72jQDTxlscdeyu1MEFdYcuS_AjJ-w=",
      sources: [
        {
          id: 1,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 2,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 3,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 4,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 5,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 6,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 7,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 8,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Khloe Kardashian",
      url: "https://i.pinimg.com/736x/02/01/bb/0201bbb8cbead4e19866c93b9171ab25.jpg",
      sources: [
        {
          id: 1,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 2,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 3,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 4,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 5,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 6,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 7,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 8,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Kris Jenner",
      url: "https://modelfactory.in/assets/frontend/js/ckeditor/ckfinder/userfiles/images/fashion-editorial-girl-posing-in-studio.jpg",
      sources: [
        {
          id: 1,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 2,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 3,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 4,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 5,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 6,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 7,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
        {
          id: 8,
          url: "https://blendstudios.com/wp-content/uploads/2019/12/Model-Photography_27.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center ml-auto w-4/5">
      <div className="flex my-5">
        <div style={{ maxWidth: "600px" }}>
          {posts.map((post) => (
            <div key={post.id} className="pb-5 mb-5 border-b border-gray-800">
              <div className="flex items-center mb-3">
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                    objectFit: "cover",
                  }}
                  className="mr-2"
                />
                <span>{post.name}</span>
              </div>
              <div>
                <img
                  src={post.url}
                  alt="profile"
                  style={{
                    borderRadius: "4px",
                    width: "100%",
                    maxHeight: "1000px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex w-full overflow-auto mt-3" style={{scrollbarColor: "gray black", scrollbarWidth: "thin"}}>
                {post.sources?.map((source) => (
                  <img
                    key={source.id}
                    src={source.url}
                    alt="profile"
                    style={{
                      borderRadius: "4px",
                      height: "120px",
                      width: "120px",
                      objectFit: "cover",
                      aspectRatio: "1",
                    }}
                    className="mr-2"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="ml-10 w-3/5">
          <div className="w-full">Suggested for you</div>
          <div className="flex items-center mt-5 w-full">
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt="profile"
              style={{
                borderRadius: "50%",
                height: "50px",
                width: "50px",
                objectFit: "cover",
              }}
            />
            <span className="pl-3">Ashish Gupta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
