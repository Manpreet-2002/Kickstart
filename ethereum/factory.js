import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0D41a0B9f704723dF96773d4E050Fca46cF54663'
)
export default instance