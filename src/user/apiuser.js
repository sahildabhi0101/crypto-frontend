export const read = (userId, token) => {
  console.log("inside read");
  return fetch(`/users/${userId}`, {
    method: "GET", headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => { console.log(response); return response.json() })
    .catch(err => console.log(err))
};

export const update = (userId, token, user) => {
  return fetch(`/users/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: user

  })
    .then(response => { return response.json(); })
    .catch(err => console.log(err))
};

export const updateuserhomepage = (user, next) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt')) {
      let auth = JSON.parse(localStorage.getItem('jwt'))
      // console.group(auth.user);
      auth.user = user;
      localStorage.setItem('jwt', JSON.stringify(auth));
      next();
    }
  }
}