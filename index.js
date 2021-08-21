const fetch = require('node-fetch');

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,chainlink,polkadot,kusama,cardano,stellar,tezos,cosmos,zcash,binancecoin,huobi-token,uniswap,aave,yearn-finance,havven,maker,compound-governance-token,uma,republic-protocol,loopring,blockstack,reserve-rights-token,thorchain,nxm,numeraire,band-protocol,balancer,aragon,avalanche-2,curve-dao-token,hegic,gnosis,fantom,handshake,harvest-finance,livepeer,perpetual-protocol,zap,barnbridge,celo-gold,aergo,yflink,synlev,cover-protocol,wrapped-nxm,xdai-stake,bancor,dhedge-dao,filecoin,alpha-finance,saffron-finance,injective-protocol,dodo,mcdex,yam-2,pickle-finance,sushi,empty-set-dollar,ampleforth,basis-cash,melon,the-graph,aurora-dao,kava,keep-network,kyber-network,musd,ocean-protocol,helium,rarible,secret,skale,tellor,idle,siacoin,cream-2,yaxis,1inch,cofix,finnexus,auctus,lien,unimex-network,nest,mirror-protocol,deri-protocol,rari-governance-token,premia,mainframe,pancakeswap-token,tornado-cash,frax,frax-share,auto,hydradx,serum,solana,ftx-token,zkswap,vesper-finance,polkastarter,cyberfi,antimatter,cvault-finance,raydium,wootrade-network,arc-governance,zoracles,linear,whiteheart,88mph,sefi,liquity,futureswap,opium,siren,mina-protocol,matic-network,idle,indexed-finance,dopex,visor,bifrost,bonfida&order=market_cap_desc&per_page=250&page=1&sparkline=false'

const sourcedata = () => fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.length))
  .then(data => console.log(data));

sourcedata();
