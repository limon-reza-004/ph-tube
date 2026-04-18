function loadCategories() {
    // fetch the data

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json()) // convert promise to json
        .then(data => displayCategories(data.categories)) // send data to displayCategories function
}

// category_id":"1001","category":"Music

function displayCategories(categories) {
    const categoryContainer = document.getElementById('category-container');

    for (let category of categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="btn btn-sm bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white text-[#25252590]">${category.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    }
}







// {
//     "category_id": "1003",
//     "video_id": "aaai",
//     "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
//     "title": "30 Rock",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
//             "profile_name": "Tina Fey",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "4.5K",
//         "posted_date": "14800"
//     },
//     "description": "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
// }





// load videos
function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
        // console.log(video)

        const videoCard = document.createElement("div");

        videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
    </div>

        `;

        videoContainer.append(videoCard);

    });
}

loadCategories();
loadVideos();
