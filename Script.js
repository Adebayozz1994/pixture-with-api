const fetchPic = () => {
    let inp = document.getElementById("inp");
    if (inp.value !== "") {
        let URLpic = `https://pixabay.com/api/?key=42766677-a60e8405a1f2deafc19e9c99a&q=${inp.value}&image_type=photo`;
        inp.value = "";
        fetch(URLpic)
            .then(responsepic => responsepic.json())
            .then(convertedResponsepic => {
                let necessary = convertedResponsepic.hits;
                picArray = necessary.map(item => ({
                    imageUrl: item.largeImageURL,
                    imageName: item.user + "-" + item.id 
                }));
                console.log(picArray);
                let showPic = document.getElementById("showPic");
                showPic.innerHTML = picArray.map(pic => `
                    <div class="imgcont col-6">
                        <img class="m-2" src="${pic.imageUrl}" alt="">
                        <p class="text-center">${pic.imageName}</p>
                    </div>`).join('');
                document.body.style.backgroundColor = "white";
            })
            .catch(error => {
                console.error('Error fetching pictures:', error);
            });
    } else {
        alert("Please enter something in the space provided");
    }
};
