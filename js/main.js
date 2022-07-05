console.log('Задание №4');

function delay(data, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), ms)
    }) 
}

async function getUserInfo() {
    return delay({ name: 'Vic', age: 21, id: 1 }, 1000);
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg';
    return delay(userInfo, 1000);
}

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return delay(userInfo, 1000);
}


async function getResult() {
    let getDataUser = await getUserInfo();
    let getAvatar = await getUserAvatar(getDataUser);
    let getUserAllInfo = await getUserAdditionalInfo(getAvatar);

    console.log(getUserAllInfo);
}

getResult();


console.log('Задание №5');

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error');
    } catch (err) {
        console.log(err);
    }
}
 
getInfo();
