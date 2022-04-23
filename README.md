# Kickstart_updated

![Kickstart](https://user-images.githubusercontent.com/79961524/164913045-b8f7482c-1c31-4b36-abeb-07bd412be3bc.png)

This project is a web3 replica of Kickstarter application.
There are 2 contracts in ethereum/contract/Campaign.sol file - Campaign and Campaign factory.

The Campaign contract essentially describes what a campaign is, who is the manager of the campaign, how much ether is stored in the campaign contract, who all donated to the campaign, how many requests a manager has added to the campaign to withdraw money, how many approvers have approved the request and whether the request is finalized or not.

The CampaignFactory contract is sort of a manager for the campaign contract as the user invokes a transaction on the CampaignFactory contract to deploy an instance of a camapign on the blockchain and it records the address of that campaign instance.

This was the final project in the Ethereum And Solidity The Complete Developers Guide : Udemy course
