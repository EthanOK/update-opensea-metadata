const { updata_metadata } = require("./updata_metadata");

async function main() {
  const start_tokenId = 1800;
  const end_tokenId = 7200;
  await updata_metadata(
    "0x1b489201D974D37DDd2FaF6756106a7651914A63",
    start_tokenId,
    end_tokenId
  );
}

main();
