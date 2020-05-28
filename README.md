# ethereum-lottery

This project contains the relevant source files to deploy a lottery contract to the Rinkeby network.

### Deployments

1. Retreive a Rinkeby endpoint from [infura][infura_url].
1. Create a MetaMask account and capture your mnemonic.
1. Run the deploy script.
   ```
   MNEMONIC=’<your mnemonic>’ ENDPOINT=<your endpoint> node deploy.js
   ```
1. Replace the placeholders above with the appropriate values.
1. Note the resulting project address.

### Interacting with the Lottery Contract

Using the Remix Tool

1. Visit the [Remix website][remix_url].
1. Select the `Solidity` environment.
1. Create a new file called `lottery.sol`.
1. Copy and paste the content of the local `contracts/lottery.sol` into the remote text editor.
1. Compile the code using the Solidity Compiler.
1. Set your environment to `Injected Web3`.
1. Enter the address from the `Deployments` step into the `At Address` text field.
1. Click the `At Address` button.

[remix_url]: http://remix.ethereum.org/
[infura_url]: https://infura.io/