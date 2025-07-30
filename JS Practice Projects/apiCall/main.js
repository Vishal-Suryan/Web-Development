const postListContainer = document.querySelector(".posts-list-container");

// fetch using XHR
function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("Some Error Occured");
    }
  };
}

function displayResults(posts) {
  postListContainer.innerHTML = posts
    .map(
      (postItem) => `
        <div class="post-item">
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
        </div>
        `
    )
    .join(" ");
}

//fetchUsingXHR();

/** ------------------------------------------------------ */
// Using Fetch
function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}
//fetchUsingFetchMethod();

/** ------------------------------------------------------ */
// Using Async Await
async function fetchUSingAsyncAwaitMethod() {
  const fetchRequest = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "GET",
    }
  );

  const result = await fetchRequest.json();
  displayResults(result);
}
//fetchUSingAsyncAwaitMethod();

/** ------------------------------------------------------ */
// Using fetchUsingXHRAndAsyncAwait

async function fetchUsingXHRAndAsyncAwait() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayResults(response);
}

function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}

fetchUsingXHRAndAsyncAwait();
