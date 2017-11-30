// Import Data into Database

var Datastore = require('nedb');
var itemDb = new Datastore({ filename: '~/Documents/mobiledev/node_app/db/ItemInfo.db', autoload: true });

itemDb.ensureIndex({ fieldName: 'itemId', unique: true });

var itemInfo = [
  {
    itemId: '100',
    itemName: 'Seagate Backup Plus Hub 6TB USB3.0 3.5吋 外接硬碟',
    itemPrice: 5488.0,
    itemImg: 'http://a.ecimg.tw/items/DRAM08A9008GSD7/000001_1510715248.jpg',
    itemDescr: 'USB3.0 高速傳輸介面|獨家 App 備份軟體|內建 Dashboard 軟體輕鬆備份 & 分享|隨插即用，免安裝|支援 Windows/Mac 作業系統|原廠三年保固'
  },
  {
    itemId: '200',
    itemName: 'Seagate Backup Plus Hub 8TB USB3.0 3.5吋 外接硬碟',
    itemPrice: 7388.0,
    itemImg: 'http://a.ecimg.tw/items/DRAM0819008J9EP/000001_1510811891.jpg',
    itemDescr: 'USB3.0 高速傳輸介面|獨家 App 備份軟體|內建 Dashboard 軟體輕鬆備份 & 分享|隨插即用，免安裝|支援 Windows/Mac 作業系統|原廠三年保固'
  },
  {
    itemId: '300',
    itemName: '創見 SJ35T3 8TB USB3.1 3.5吋 外接硬碟',
    itemPrice: 7499.0,
    itemImg: 'http://a.ecimg.tw/items/DRAM0819008J9EP/000001_1510811891.jpg',
    itemDescr: '節省空間的直立設計|高速 USB3.1 傳輸規格|無風扇，低噪音|符合歐盟 ErP 要求的省電睡眠模式|One Touch 自動備份功能|256位元 AES 檔案或資料夾加密功能|專屬 Transcend Elite 資料管理軟體|原廠三年保固'
  }
];

// Read from CSV

for (var i=0; i<itemInfo.length; i++) {
  itemDb.insert(itemInfo[i], function(err, doc) {
    if (err === null) {
      console.log(doc);
    }
  });
};

itemDb.find({ itemPrice: { $gt: 100 }}, function(err, docs) {
    docs.forEach(function(doc) {
        console.log(doc._id, doc.itemName);
    });
});
