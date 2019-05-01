import qrcode from 'qrcode-generator'

const make = input => {
  try {
    const qr = qrcode(0, 'M')
    qr.addData(input)
    qr.make()
    return qr
  } catch (e) {
    console.log(e)
  }
}

export default {
  qrcode,
  make
}
