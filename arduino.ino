bool twelve = false;

void setup() {
  // put your setup code here, to run once:
pinMode(12, OUTPUT);
pinMode(11, OUTPUT);

Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  String input;
  while (Serial.available())
  {
    input = Serial.readString();
    input.trim();
    if(input.equals('R'))
      twelve = true;
    if(input.equals('L')
  }

  if(twelve)
  {
    digitalWrite(12, HIGH);
    digitalWrite(11, LOW);
  }
  else
  {
    digitalWrite(12, LOW);
    digitalWrite(11, HIGH);
  }
}
