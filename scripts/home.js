document.getElementById("visit-button").addEventListener("click", function () {
    window.scrollTo({
        top: document.getElementById("buy-sell").offsetTop,
        behavior: "smooth",
    });
});

const setmoreRefreshToken = "blah";
let setmoreAccessToken = "";

async function getSetmoreAccessToken() {
    const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://developer.setmore.com/o/oauth2/token?refreshToken=${setmoreRefreshToken}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();
    setmoreAccessToken = data.accessToken;

    return data.accessToken;
}

async function getSetmoreData() {
    const accessToken = setmoreAccessToken || (await getSetmoreAccessToken());
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://developer.setmore.com/api/v1/bookingapi/services", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();

    return data.data;
}

// getSetmoreData().then((data) => {
//     console.log(data);
// });
