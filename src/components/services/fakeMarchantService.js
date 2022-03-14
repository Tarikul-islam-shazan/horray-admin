const marchants = [
    {
        key: '1',
        marchant: 'Bata',
        phone: '+8801734343567',
        address: 'New York No. 1 Lake Park',
        discount: ['10%', 'Low'],
      },
      {
        key: '2',
        marchant: 'Apex',
        phone: '+8801734343567',
        address: 'London No. 1 Lake Park',
        discount: ['20%','Mid'],
      },
      {
        key: '3',
        marchant: 'Sailor',
        phone: '+8801734343567',
        address: 'Sidney No. 1 Lake Park',
        discount: ['30%','High'],
      },
];

export function getMarchants() {
    return marchants;
}

export function getMarchant(id) {
    return marchants.filter(e => e.id === id);
}

export function saveMarchant(marchant) {
    let marchantInDB = marchants.find(e => e.key === marchant.key) || {};
    marchantInDB.key = marchants.length + 1;
    marchantInDB.marchant = marchant.marchant;
    marchantInDB.phone = marchant.phone;
    marchantInDB.address = marchant.address;
    if(!marchantInDB.key) marchants.push(marchantInDB);
    return marchantInDB;
}

