const serialPort = 'COM_';

function preload()
{
  serial = new p5.SerialPort();
}

function setup()
{
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

