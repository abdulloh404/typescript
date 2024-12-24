// สร้างฟังก์ชันและใช้ตัวแปร
// และสร้าง model interface
// {
//    "a":1,
//    "b":2,
//    "c":{
//       "c1":"a",
//       "c2":{
//          "c21":"b",
//          "c22":true
//       }
//    }
// }
// เรียงค่าออกมาทั้งหมดทุกค่าที่อยู่ใน
// {
//    "a":1,
//    "b":2,
//    "c.c1":"a",
//    "c.c2.c21":"b",
//    "c.c2.c22":"true"
// }
// และ output ออกมา หน้าตาแบบนี้

const params = {
  a: 1,
  b: 2,
  c: {
    c1: 'a',
    c2: {
      c21: 'b',
      c22: true,
    },
  },
};

function flattenObject(params: Record<string, any>, prefix: string = ''): any {
  let result: Record<string, any> = {};

  for (const key in params) {
    const value = params[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === 'object') {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = typeof value === 'boolean' ? value.toString() : value;
    }
  }
  return result;
}

const flattenObjectValue = flattenObject(params);
console.log('Result:', flattenObjectValue);
