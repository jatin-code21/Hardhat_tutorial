async function main(){
    const NumberStorage = await ethers.getContractFactory("NumberStorage"); // instance of contract
    const numberStorage = await NumberStorage.deploy(); // deploy contract
    console.log("NumberStorage deployed to:", numberStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });