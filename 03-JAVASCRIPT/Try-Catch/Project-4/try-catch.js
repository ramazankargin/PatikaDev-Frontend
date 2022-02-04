const componentLoadingClass = "component-loading";
const componentEl = document.querySelector(".component");
const userNameEl = componentEl.querySelector("#userName");
const repoNameEl = componentEl.querySelector("#repoName");
const formEl = componentEl.querySelector("form");
const starsNumberEl = componentEl.querySelector(".stars-number");


function startLoadingAnimation() {
    componentEl.classList.add(componentLoadingClass);
}

function stopLoadingAnimation() {
    componentEl.classList.remove(componentLoadingClass);
}

formEl.addEventListener("submit", async function(e) {
    e.preventDefault();

    starsNumberEl.innerHTML = "";
    startLoadingAnimation();

    try{
        const starsNumber = await fetch(
            `https://api.github.com/repos/${usernameEl.value}/${reponameEl.value}`
        )
            .then(res => res.json())
            .then(data => data.stargazers_count);

        starsNumberEl.innerHTML = starsNumber;
    }catch (error) {
        starsNumberEl.innerHTML = "Couldn't get the stars number";
    } finally {
        stopLoadingAnimation();
    }
})