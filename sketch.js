const serialPort = 'COM_';
let serial;

function setup()
{
  serial = new p5.SerialPort();
  serial.open(serialPort);
  createCanvas(320, 240);
}

function draw()
{
  background(0);
  fill(255);

  if(mouseIsPressed)
  {
    Serial.write('R');
    console.log('R');
  }
  else
  {
    Serial.write('L');
    console.log('R');
  }
}

