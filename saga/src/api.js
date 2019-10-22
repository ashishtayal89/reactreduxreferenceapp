var people = [
  {
    _id: "5d4890513e7eb372207ac3cb",
    age: 30,
    eyeColor: "blue",
    name: {
      first: "Holland",
      last: "Frye"
    },
    company: "TSUNAMIA",
    email: "holland.frye@tsunamia.org",
    phone: "+971 (942) 412-2572",
    address: "387 Haring Street, Camptown, Indiana, 1798"
  },
  {
    _id: "5d48905199aeda03d62b7f93",
    age: 31,
    eyeColor: "blue",
    name: {
      first: "Pugh",
      last: "Nichols"
    },
    company: "NEPTIDE",
    email: "pugh.nichols@neptide.io",
    phone: "+971 (961) 557-2098",
    address: "498 Prospect Avenue, Celeryville, Missouri, 4468"
  },
  {
    _id: "5d48905199f37d0bb54a4d35",
    age: 39,
    eyeColor: "blue",
    name: {
      first: "Stephens",
      last: "Wolf"
    },
    company: "SENMAO",
    email: "stephens.wolf@senmao.net",
    phone: "+971 (960) 589-3701",
    address: "425 Anna Court, Dunnavant, Oklahoma, 3297"
  },
  {
    _id: "5d4890512998491195bce329",
    age: 36,
    eyeColor: "brown",
    name: {
      first: "Carmella",
      last: "Petersen"
    },
    company: "QUILM",
    email: "carmella.petersen@quilm.me",
    phone: "+971 (964) 401-2672",
    address: "186 Etna Street, Grandview, South Carolina, 3453"
  },
  {
    _id: "5d489051793efc1ee0b4ac07",
    age: 28,
    eyeColor: "green",
    name: {
      first: "Morse",
      last: "Fox"
    },
    company: "VITRICOMP",
    email: "morse.fox@vitricomp.biz",
    phone: "+971 (869) 558-2958",
    address: "215 Poly Place, Hinsdale, Rhode Island, 8990"
  },
  {
    _id: "5d4890511947322f81ff140a",
    age: 21,
    eyeColor: "green",
    name: {
      first: "Valeria",
      last: "Adkins"
    },
    company: "FILODYNE",
    email: "valeria.adkins@filodyne.ca",
    phone: "+971 (899) 534-2616",
    address: "527 Dumont Avenue, Worton, New Mexico, 8491"
  },
  {
    _id: "5d4890519339116eb64a4665",
    age: 39,
    eyeColor: "green",
    name: {
      first: "Owens",
      last: "Wilkins"
    },
    company: "LUDAK",
    email: "owens.wilkins@ludak.tv",
    phone: "+971 (873) 590-3030",
    address: "376 Freeman Street, Jacksonburg, Alabama, 7207"
  },
  {
    _id: "5d4890510324cdd3116cda74",
    age: 32,
    eyeColor: "blue",
    name: {
      first: "Martinez",
      last: "Jordan"
    },
    company: "ZENSUS",
    email: "martinez.jordan@zensus.com",
    phone: "+971 (903) 539-3820",
    address: "274 Broome Street, Ronco, California, 3389"
  },
  {
    _id: "5d489051892bb0f68a785998",
    age: 20,
    eyeColor: "brown",
    name: {
      first: "Glenn",
      last: "Neal"
    },
    company: "EYERIS",
    email: "glenn.neal@eyeris.biz",
    phone: "+971 (857) 519-3644",
    address: "319 Hamilton Walk, Epworth, Massachusetts, 2081"
  },
  {
    _id: "5d489051bd32fa184ba0f4bb",
    age: 30,
    eyeColor: "blue",
    name: {
      first: "Tucker",
      last: "Bird"
    },
    company: "EXOTERIC",
    email: "tucker.bird@exoteric.co.uk",
    phone: "+971 (815) 428-2328",
    address: "108 Chase Court, Wollochet, Minnesota, 9859"
  },
  {
    _id: "5d4890519eb78451ea507be9",
    age: 37,
    eyeColor: "brown",
    name: {
      first: "Cherry",
      last: "Moss"
    },
    company: "SEQUITUR",
    email: "cherry.moss@sequitur.name",
    phone: "+971 (850) 562-2387",
    address: "132 Auburn Place, Westerville, Maryland, 3610"
  },
  {
    _id: "5d4890516ff31c3707ed87f4",
    age: 30,
    eyeColor: "blue",
    name: {
      first: "Brianna",
      last: "Benton"
    },
    company: "LUMBREX",
    email: "brianna.benton@lumbrex.us",
    phone: "+971 (992) 406-2715",
    address: "905 Folsom Place, Rosine, Nevada, 3887"
  },
  {
    _id: "5d489051d8c4e16c0d907931",
    age: 32,
    eyeColor: "blue",
    name: {
      first: "Hilary",
      last: "Larsen"
    },
    company: "ELECTONIC",
    email: "hilary.larsen@electonic.org",
    phone: "+971 (978) 504-2498",
    address: "779 Lawn Court, Mahtowa, District Of Columbia, 6465"
  },
  {
    _id: "5d48905143ea48a003d5bcbd",
    age: 37,
    eyeColor: "blue",
    name: {
      first: "Gracie",
      last: "Aguirre"
    },
    company: "ENOMEN",
    email: "gracie.aguirre@enomen.io",
    phone: "+971 (901) 495-2686",
    address: "919 Post Court, Brookfield, North Carolina, 8698"
  },
  {
    _id: "5d48905103bbf745ea22cffe",
    age: 34,
    eyeColor: "brown",
    name: {
      first: "Randolph",
      last: "Terrell"
    },
    company: "KENGEN",
    email: "randolph.terrell@kengen.net",
    phone: "+971 (826) 474-3175",
    address: "684 Hoyts Lane, Topaz, Vermont, 1820"
  },
  {
    _id: "5d4890514aa99f1d8475450f",
    age: 22,
    eyeColor: "green",
    name: {
      first: "Jody",
      last: "Potter"
    },
    company: "PHUEL",
    email: "jody.potter@phuel.me",
    phone: "+971 (900) 489-3104",
    address: "620 McClancy Place, Finderne, Virgin Islands, 4941"
  },
  {
    _id: "5d48905140122f93402d9a04",
    age: 28,
    eyeColor: "brown",
    name: {
      first: "Stacey",
      last: "Ortega"
    },
    company: "ORONOKO",
    email: "stacey.ortega@oronoko.biz",
    phone: "+971 (956) 580-2958",
    address: "125 Thames Street, Robbins, American Samoa, 8033"
  },
  {
    _id: "5d4890513ab0b532b42dbe14",
    age: 39,
    eyeColor: "blue",
    name: {
      first: "Vicky",
      last: "Stephenson"
    },
    company: "PLUTORQUE",
    email: "vicky.stephenson@plutorque.ca",
    phone: "+971 (879) 592-3679",
    address: "840 Williams Avenue, Dante, Alaska, 7044"
  },
  {
    _id: "5d489051787fb55bc66df1d5",
    age: 36,
    eyeColor: "green",
    name: {
      first: "Hodge",
      last: "Woods"
    },
    company: "WEBIOTIC",
    email: "hodge.woods@webiotic.tv",
    phone: "+971 (952) 541-2288",
    address: "126 Aster Court, Orviston, North Dakota, 2033"
  },
  {
    _id: "5d489051b978f36c86d3a9b9",
    age: 34,
    eyeColor: "blue",
    name: {
      first: "Hatfield",
      last: "Richmond"
    },
    company: "ACLIMA",
    email: "hatfield.richmond@aclima.com",
    phone: "+971 (936) 592-2149",
    address: "113 Creamer Street, Groveville, Puerto Rico, 1244"
  },
  {
    _id: "5d489051547e4f73a79eac45",
    age: 38,
    eyeColor: "green",
    name: {
      first: "Rosalind",
      last: "Avery"
    },
    company: "BEDDER",
    email: "rosalind.avery@bedder.biz",
    phone: "+971 (826) 427-2724",
    address: "570 Bush Street, Dale, Ohio, 4281"
  },
  {
    _id: "5d48905151ed1b3d39b1ad83",
    age: 39,
    eyeColor: "blue",
    name: {
      first: "Hollie",
      last: "Murray"
    },
    company: "ERSUM",
    email: "hollie.murray@ersum.co.uk",
    phone: "+971 (800) 488-2492",
    address: "772 Stratford Road, Brenton, Mississippi, 5096"
  },
  {
    _id: "5d489051bdbea63ac2c7f39b",
    age: 39,
    eyeColor: "brown",
    name: {
      first: "Snyder",
      last: "Martin"
    },
    company: "GROK",
    email: "snyder.martin@grok.name",
    phone: "+971 (917) 550-3089",
    address: "528 Gold Street, Deercroft, Louisiana, 4508"
  },
  {
    _id: "5d489051a3b3f83c44ccb9e7",
    age: 28,
    eyeColor: "green",
    name: {
      first: "Alexandra",
      last: "Dejesus"
    },
    company: "TINGLES",
    email: "alexandra.dejesus@tingles.us",
    phone: "+971 (971) 497-3426",
    address: "876 Olive Street, Tolu, Guam, 3961"
  },
  {
    _id: "5d4890515a286efd9d8a7aaf",
    age: 27,
    eyeColor: "green",
    name: {
      first: "Fulton",
      last: "Freeman"
    },
    company: "NEWCUBE",
    email: "fulton.freeman@newcube.org",
    phone: "+971 (855) 549-2986",
    address: "558 Fuller Place, Wintersburg, South Dakota, 9634"
  },
  {
    _id: "5d489051b9a8a6267a7beaf7",
    age: 22,
    eyeColor: "brown",
    name: {
      first: "Lindsay",
      last: "Frank"
    },
    company: "SNOWPOKE",
    email: "lindsay.frank@snowpoke.io",
    phone: "+971 (895) 560-3128",
    address: "971 Moore Street, Croom, Tennessee, 5857"
  },
  {
    _id: "5d48905108f623f3778d0484",
    age: 37,
    eyeColor: "brown",
    name: {
      first: "Pacheco",
      last: "Le"
    },
    company: "INRT",
    email: "pacheco.le@inrt.net",
    phone: "+971 (816) 519-3768",
    address: "134 Lake Place, Onton, Palau, 940"
  },
  {
    _id: "5d489051a8ba8cdd6571ba83",
    age: 36,
    eyeColor: "blue",
    name: {
      first: "Guerra",
      last: "Spence"
    },
    company: "ISOTRONIC",
    email: "guerra.spence@isotronic.me",
    phone: "+971 (859) 409-2851",
    address: "931 Sackman Street, Elwood, Kentucky, 6291"
  },
  {
    _id: "5d4890510d0af3bf53931a44",
    age: 24,
    eyeColor: "brown",
    name: {
      first: "Susanna",
      last: "Johnston"
    },
    company: "RECRISYS",
    email: "susanna.johnston@recrisys.biz",
    phone: "+971 (889) 509-2657",
    address: "613 Montieth Street, Ilchester, Northern Mariana Islands, 1710"
  },
  {
    _id: "5d4890514b2ececdef0dbfa4",
    age: 21,
    eyeColor: "brown",
    name: {
      first: "Sanchez",
      last: "Williams"
    },
    company: "BALUBA",
    email: "sanchez.williams@baluba.ca",
    phone: "+971 (874) 535-3530",
    address: "974 Devon Avenue, Savannah, Federated States Of Micronesia, 1176"
  },
  {
    _id: "5d4890519eba9a43f78f5444",
    age: 23,
    eyeColor: "brown",
    name: {
      first: "Gilbert",
      last: "Miles"
    },
    company: "ZOXY",
    email: "gilbert.miles@zoxy.tv",
    phone: "+971 (815) 546-3869",
    address: "949 Kimball Street, Nescatunga, Utah, 9150"
  },
  {
    _id: "5d489051d4358265f0a494d1",
    age: 33,
    eyeColor: "green",
    name: {
      first: "Deirdre",
      last: "Kirby"
    },
    company: "POWERNET",
    email: "deirdre.kirby@powernet.com",
    phone: "+971 (832) 477-3921",
    address: "600 Dover Street, Catherine, Wyoming, 3779"
  },
  {
    _id: "5d489051d5bf5ad53c3af03e",
    age: 22,
    eyeColor: "blue",
    name: {
      first: "Casey",
      last: "Vincent"
    },
    company: "HELIXO",
    email: "casey.vincent@helixo.biz",
    phone: "+971 (907) 550-2132",
    address: "940 Moore Place, Fontanelle, Nebraska, 6285"
  },
  {
    _id: "5d489051bd390308f1eda205",
    age: 20,
    eyeColor: "green",
    name: {
      first: "Ware",
      last: "Heath"
    },
    company: "ELEMANTRA",
    email: "ware.heath@elemantra.co.uk",
    phone: "+971 (930) 564-2275",
    address: "585 Woodrow Court, Coinjock, Michigan, 3492"
  },
  {
    _id: "5d489051e24cd7dd2faf9633",
    age: 30,
    eyeColor: "green",
    name: {
      first: "Weaver",
      last: "Barrett"
    },
    company: "GAZAK",
    email: "weaver.barrett@gazak.name",
    phone: "+971 (902) 582-3154",
    address: "876 Degraw Street, Montura, Marshall Islands, 7391"
  },
  {
    _id: "5d489051bd269952753b35f6",
    age: 28,
    eyeColor: "blue",
    name: {
      first: "Merrill",
      last: "Porter"
    },
    company: "MEDESIGN",
    email: "merrill.porter@medesign.us",
    phone: "+971 (937) 566-2294",
    address: "964 Newkirk Placez, Remington, Wisconsin, 1503"
  },
  {
    _id: "5d4890515001664a2cb15ec2",
    age: 28,
    eyeColor: "brown",
    name: {
      first: "Stark",
      last: "Mayer"
    },
    company: "PHORMULA",
    email: "stark.mayer@phormula.org",
    phone: "+971 (952) 579-3808",
    address: "144 Buffalo Avenue, Babb, Maine, 8042"
  },
  {
    _id: "5d489051c1467539bf05bec0",
    age: 37,
    eyeColor: "brown",
    name: {
      first: "Monroe",
      last: "Skinner"
    },
    company: "FLUM",
    email: "monroe.skinner@flum.io",
    phone: "+971 (804) 424-3880",
    address: "838 Jay Street, Escondida, Pennsylvania, 4712"
  },
  {
    _id: "5d4890510edaf45e7dc4c935",
    age: 39,
    eyeColor: "brown",
    name: {
      first: "Bernice",
      last: "Duncan"
    },
    company: "SHEPARD",
    email: "bernice.duncan@shepard.net",
    phone: "+971 (840) 600-2702",
    address: "113 Branton Street, Whitmer, Texas, 850"
  },
  {
    _id: "5d4890517fa8abec43e1a5c9",
    age: 40,
    eyeColor: "brown",
    name: {
      first: "Debra",
      last: "Forbes"
    },
    company: "DOGNOSIS",
    email: "debra.forbes@dognosis.me",
    phone: "+971 (901) 484-3783",
    address: "493 Gerritsen Avenue, Bellamy, Iowa, 2888"
  },
  {
    _id: "5d48905105e19e0c722d617a",
    age: 31,
    eyeColor: "green",
    name: {
      first: "Crane",
      last: "Livingston"
    },
    company: "RONELON",
    email: "crane.livingston@ronelon.biz",
    phone: "+971 (893) 474-3850",
    address: "859 Bushwick Avenue, Bawcomville, Arkansas, 3679"
  },
  {
    _id: "5d48905161194f844eae6728",
    age: 24,
    eyeColor: "green",
    name: {
      first: "Mandy",
      last: "Fernandez"
    },
    company: "DIGIPRINT",
    email: "mandy.fernandez@digiprint.ca",
    phone: "+971 (879) 560-3840",
    address: "411 Ide Court, Vaughn, Hawaii, 4469"
  },
  {
    _id: "5d48905184d52e38bfaa23da",
    age: 28,
    eyeColor: "green",
    name: {
      first: "Neva",
      last: "Poole"
    },
    company: "GENESYNK",
    email: "neva.poole@genesynk.tv",
    phone: "+971 (957) 422-3305",
    address: "377 Hutchinson Court, Eureka, New Hampshire, 2312"
  },
  {
    _id: "5d4890519515934ad8376eb9",
    age: 33,
    eyeColor: "green",
    name: {
      first: "Callie",
      last: "Jacobson"
    },
    company: "QUOTEZART",
    email: "callie.jacobson@quotezart.com",
    phone: "+971 (874) 526-4000",
    address: "937 Vandam Street, Callaghan, Georgia, 4865"
  },
  {
    _id: "5d4890512c019a8f32d76d62",
    age: 30,
    eyeColor: "brown",
    name: {
      first: "Kirby",
      last: "Paul"
    },
    company: "ESCHOIR",
    email: "kirby.paul@eschoir.biz",
    phone: "+971 (807) 534-3005",
    address: "710 Imlay Street, Alden, West Virginia, 1940"
  },
  {
    _id: "5d4890516a5d903e70ca2ce8",
    age: 24,
    eyeColor: "green",
    name: {
      first: "Joseph",
      last: "Lynn"
    },
    company: "MARVANE",
    email: "joseph.lynn@marvane.co.uk",
    phone: "+971 (942) 434-3838",
    address: "665 Rost Place, Mulberry, Arizona, 7829"
  },
  {
    _id: "5d489051a8fca19633a515b6",
    age: 29,
    eyeColor: "blue",
    name: {
      first: "Tisha",
      last: "Keller"
    },
    company: "ORBIXTAR",
    email: "tisha.keller@orbixtar.name",
    phone: "+971 (947) 527-2573",
    address: "110 Beverley Road, Cutter, Florida, 4969"
  },
  {
    _id: "5d489051cb6315b0d2e5cf5e",
    age: 32,
    eyeColor: "blue",
    name: {
      first: "Kendra",
      last: "Greene"
    },
    company: "MIRACULA",
    email: "kendra.greene@miracula.us",
    phone: "+971 (851) 419-2349",
    address: "537 Woodruff Avenue, Fairforest, Illinois, 9474"
  },
  {
    _id: "5d489051f16d58ce4fcff3cc",
    age: 34,
    eyeColor: "green",
    name: {
      first: "Katherine",
      last: "Graves"
    },
    company: "BOINK",
    email: "katherine.graves@boink.org",
    phone: "+971 (803) 499-3758",
    address: "964 Tilden Avenue, Barclay, New Jersey, 3945"
  },
  {
    _id: "5d489051ef0358314f99d0fa",
    age: 24,
    eyeColor: "green",
    name: {
      first: "Dawn",
      last: "Mendoza"
    },
    company: "ZUVY",
    email: "dawn.mendoza@zuvy.io",
    phone: "+971 (895) 482-3303",
    address: "301 Krier Place, Sunnyside, Washington, 1452"
  }
];

var getDelayTime = function(numberOfRecords) {
  var delayFactor = Math.floor(numberOfRecords / 10) + 1;
  return Math.floor(1000 + Math.random() * 1000 * delayFactor);
};

var fetch = function(numberOfRecords, callback) {
  var records = people.slice(0, numberOfRecords);
  setTimeout(function() {
    if (numberOfRecords > people.length) {
      callback(
        undefined,
        new Error("Number of records should be less than 50")
      );
    } else {
      callback(records);
    }
  }, getDelayTime(numberOfRecords));
};

var fetchPromise = function(numberOfRecords) {
  var records = people.slice(0, numberOfRecords);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (numberOfRecords > people.length) {
        reject(new Error("Number of records should be less than 50"));
      } else {
        resolve(records);
      }
    }, getDelayTime(numberOfRecords));
  });
};
var counter = (function() {
  var id;
  return function() {
    if (id != undefined) {
      return "Already invoked";
    }
    var count = 1;
    id = setInterval(function() {
      if (count > 10) {
        clearInterval(id);
        id = undefined;
      } else {
        console.log(count++);
      }
    }, 1000);
  };
})();

export { fetch, fetchPromise };
