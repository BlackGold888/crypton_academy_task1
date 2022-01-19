/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b2138038062001b21833981810160405281019062000037919062000193565b81600390805190602001906200004f92919062000071565b5080600490805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61179b80620003866000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340c10f191161008c5780639dc29fac116100665780639dc29fac1461023c578063a457c2d71461026c578063a9059cbb1461029c578063dd62ed3e146102cc576100cf565b806340c10f19146101be57806370a08231146101ee57806395d89b411461021e576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102fc565b6040516100e99190611236565b60405180910390f35b61010c6004803603810190610107919061101b565b61038a565b604051610119919061121b565b60405180910390f35b61012a6103a1565b6040516101379190611398565b60405180910390f35b61015a60048036038101906101559190610fcc565b6103a7565b604051610167919061121b565b60405180910390f35b6101786104c1565b60405161018591906113b3565b60405180910390f35b6101a860048036038101906101a3919061101b565b6104ca565b6040516101b5919061121b565b60405180910390f35b6101d860048036038101906101d3919061101b565b610568565b6040516101e5919061121b565b60405180910390f35b61020860048036038101906102039190610f67565b61057e565b6040516102159190611398565b60405180910390f35b6102266105c6565b6040516102339190611236565b60405180910390f35b6102566004803603810190610251919061101b565b610654565b604051610263919061121b565b60405180910390f35b6102866004803603810190610281919061101b565b61066a565b604051610293919061121b565b60405180910390f35b6102b660048036038101906102b1919061101b565b610750565b6040516102c3919061121b565b60405180910390f35b6102e660048036038101906102e19190610f90565b610767565b6040516102f39190611398565b60405180910390f35b60038054610309906114fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610335906114fc565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b505050505081565b60006103973384846107ee565b6001905092915050565b60025481565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104aa5782811015610493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048a90611318565b60405180910390fd5b6104a9853385846104a49190611440565b6107ee565b5b6104b58585856109b9565b60019150509392505050565b60006012905090565b600061055e338484600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461055991906113ea565b6107ee565b6001905092915050565b60006105748383610c2d565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600480546105d3906114fc565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff906114fc565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b505050505081565b60006106608383610d75565b6001905092915050565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561072f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610726906112b8565b60405180910390fd5b610745338585846107409190611440565b6107ee565b600191505092915050565b600061075d3384846109b9565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561085e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085590611298565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c590611258565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109ac9190611398565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2090611378565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9090611358565b60405180910390fd5b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b16906112d8565b60405180910390fd5b8181610b2b9190611440565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bbb91906113ea565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c1f9190611398565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9490611338565b60405180910390fd5b8060026000828254610caf91906113ea565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d0491906113ea565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d699190611398565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610de5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddc90611278565b60405180910390fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e62906112f8565b60405180910390fd5b8181610e779190611440565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610ecb9190611440565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f309190611398565b60405180910390a3505050565b600081359050610f4c81611737565b92915050565b600081359050610f618161174e565b92915050565b600060208284031215610f7957600080fd5b6000610f8784828501610f3d565b91505092915050565b60008060408385031215610fa357600080fd5b6000610fb185828601610f3d565b9250506020610fc285828601610f3d565b9150509250929050565b600080600060608486031215610fe157600080fd5b6000610fef86828701610f3d565b935050602061100086828701610f3d565b925050604061101186828701610f52565b9150509250925092565b6000806040838503121561102e57600080fd5b600061103c85828601610f3d565b925050602061104d85828601610f52565b9150509250929050565b61106081611486565b82525050565b6000611071826113ce565b61107b81856113d9565b935061108b8185602086016114c9565b6110948161158c565b840191505092915050565b60006110ac601b836113d9565b91506110b78261159d565b602082019050919050565b60006110cf601a836113d9565b91506110da826115c6565b602082019050919050565b60006110f2601d836113d9565b91506110fd826115ef565b602082019050919050565b6000611115601e836113d9565b915061112082611618565b602082019050919050565b6000611138601f836113d9565b915061114382611641565b602082019050919050565b600061115b601b836113d9565b91506111668261166a565b602082019050919050565b600061117e6018836113d9565b915061118982611693565b602082019050919050565b60006111a16018836113d9565b91506111ac826116bc565b602082019050919050565b60006111c4601c836113d9565b91506111cf826116e5565b602082019050919050565b60006111e7601e836113d9565b91506111f28261170e565b602082019050919050565b611206816114b2565b82525050565b611215816114bc565b82525050565b60006020820190506112306000830184611057565b92915050565b600060208201905081810360008301526112508184611066565b905092915050565b600060208201905081810360008301526112718161109f565b9050919050565b60006020820190508181036000830152611291816110c2565b9050919050565b600060208201905081810360008301526112b1816110e5565b9050919050565b600060208201905081810360008301526112d181611108565b9050919050565b600060208201905081810360008301526112f18161112b565b9050919050565b600060208201905081810360008301526113118161114e565b9050919050565b6000602082019050818103600083015261133181611171565b9050919050565b6000602082019050818103600083015261135181611194565b9050919050565b60006020820190508181036000830152611371816111b7565b9050919050565b60006020820190508181036000830152611391816111da565b9050919050565b60006020820190506113ad60008301846111fd565b92915050565b60006020820190506113c8600083018461120c565b92915050565b600081519050919050565b600082825260208201905092915050565b60006113f5826114b2565b9150611400836114b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114355761143461152e565b5b828201905092915050565b600061144b826114b2565b9150611456836114b2565b9250828210156114695761146861152e565b5b828203905092915050565b600061147f82611492565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156114e75780820151818401526020810190506114cc565b838111156114f6576000848401525b50505050565b6000600282049050600182168061151457607f821691505b602082108114156115285761152761155d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f417070726f766520746f20746865207a65726f20616464726573730000000000600082015250565b7f4275726e2066726f6d20746865207a65726f2061646472657373000000000000600082015250565b7f417070726f76652066726f6d20746865207a65726f2061646472657373000000600082015250565b7f44656372656173656420616c6c6f77616e63652062656c6f77207a65726f0000600082015250565b7f5472616e7366657220616d6f756e7420657863656564732062616c616e636500600082015250565b7f4275726e20616d6f756e7420657863656564732062616c616e63650000000000600082015250565b7f416d6f756e74206578636565647320616c6c6f77616e63650000000000000000600082015250565b7f4d696e7420746f20746865207a65726f20616464726573730000000000000000600082015250565b7f5472616e7366657220746f20746865207a65726f206164647265737300000000600082015250565b7f5472616e736665722066726f6d20746865207a65726f20616464726573730000600082015250565b61174081611474565b811461174b57600080fd5b50565b611757816114b2565b811461176257600080fd5b5056fea26469706673582212206a4ea3c9c27dc23359a01425e2f85de30ae081769e3ea2838916ba7883b8a67364736f6c63430008040033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20";
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly contractName: "ERC20";
  public readonly contractName: "ERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
