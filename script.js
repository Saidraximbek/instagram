"use strict";
const userInfo = [
  {
    avatar: "./images/Profile-Pic-S111.png",
    username: "S.aidraxim",
    postCount: 200,
    followers: 3000,
    following: 120,
    bio: "Maxwell",
  },
];

const userAllPosts = [
  {
    imgUrl: "./images/1.jfif",
  },
  {
    imgUrl: "./images/2.jfif",
  },
  {
    imgUrl: "./images/3.jfif",
  },
  {
    imgUrl: "./images/4.jfif",
  },
  {
    imgUrl: "./images/5.jfif",
  },
  {
    imgUrl: "./images/6.jfif",
  },
  {
    imgUrl: "./images/7.jfif",
  },
  {
    imgUrl: "./images/8.jfif",
  },
];

const userContainer = document.querySelector(".hero--items");
const userAvatar = document.querySelector(".avatar-img");
const userName = document.querySelector(".profile--name h1");
const userPosts = document.querySelector(".post .numbers--num");
const userFollowers = document.querySelector(".followers-count ");
const userFollowing = document.querySelector(".following-count");
const userBio = document.querySelector(".bio");

const posts = document.querySelector(".videos--grid");

const loadData = userInfo.map((user) => {
  userAvatar.src = user.avatar;
  userName.textContent = user.username;
  userPosts.textContent = user.postCount;
  userFollowers.textContent = user.followers;
  userFollowing.textContent = user.following;
  userBio.textContent = user.bio;

  // userContainer.innerHTML = `
  // <div class="profile--Image">
  //         <img
  //           class="avatar-img"
  //           src="${user.avatar}"
  //           alt="Profile img of user"
  //         />
  //       </div>
  //       <div class="profile--items">
  //         <div class="profile--name">
  //           <h1>${user.username}</h1>
  //           <button class="follow--btn" type="button">Follow</button>
  //           <img src="./images/uchnuqta.svg" alt="uchnuqta" />
  //         </div>
  //         <div class="hero--numbers">
  //           <div class="post">
  //             <p class="numbers--num posts-count">${user.postCount}</p>
  //             <p class="numbers--str">posts</p>
  //           </div>
  //           <div class="post">
  //             <p class="numbers--num followers-count">${user.followers}</p>
  //             <p class="numbers--str">followers</p>
  //           </div>
  //           <div class="post">
  //             <p class="numbers--num following-count">${user.following}</p>
  //             <p class="numbers--str">following</p>
  //           </div>
  //         </div>
  //         <div class="maxwell ">
  //           <p class="maxwell--str ">${user.bio}</p>
  //         </div>
  //       </div>
  // `
});

const loadImages = userAllPosts.map((img, index) => {
  console.log(img.imgUrl);
  posts.innerHTML += `
   <li><img class="videos--img" src="${img.imgUrl}" alt="img" /></li>`;
});
