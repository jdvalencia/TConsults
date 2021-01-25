//@ts-ignore
import Insta from "scraper-instagram";


export const getProfile = () => {
    const InstaClient = new Insta();
    let result;
    //@ts-ignore
    InstaClient.getProfile('jdv_panda').then(profile => console.log(profile)).catch(err => console.error(err)
    )
}


