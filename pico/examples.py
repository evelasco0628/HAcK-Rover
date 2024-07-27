from connections import connect_mqtt, connect_internet
from time import sleep
from machine import Pin
from constants import ssid, password, mqtt_server, mqtt_user, mqtt_pass


# Function to handle an incoming message

in1 = Pin(15, Pin.OUT) 
in2 = Pin(14, Pin.OUT)
in3 = Pin(16, Pin.OUT)
in4 = Pin(17, Pin.OUT)

def cb(topic, msg):
    print(f"Topic: {topic}, Message: {msg}")
    if topic == b"direction":
        if msg == b"forward":
            print("Move forward")
            in1.value(1)
            in2.value(0)
            in3.value(1)
            in4.value(0)
            
        elif msg == b"backward":
            print("Move backward")
            in1.value(0)
            in2.value(1)
            in3.value(0)
            in4.value(1)
            
        elif msg == b"right":
            print("Move right")
            in1.value(0)
            in2.value(0)
            in3.value(0)
            in4.value(1)
            
        elif msg == b"left":
            print("Move left")
            in1.value(0)
            in2.value(1)
            in3.value(0)
            in4.value(0)
            
        elif msg == b"stop":
            print("stop")
            in1.value(0)
            in2.value(0)
            in3.value(0)
            in4.value(0)
        

def main():
    try:
        connect_internet(ssid,password)
        client = connect_mqtt(mqtt_server, mqtt_user, mqtt_pass)

        client.set_callback(cb)
        client.subscribe("direction")
        client.publish("temp", "89")
        while True:
            client.check_msg()
            sleep(1)
            
            
    except KeyboardInterrupt:
        print('keyboard interrupt')
        

    finally:
        in1.value(0)
        in2.value(0)
        in3.value(0)
        in4.value(0)
        
if __name__ == "__main__":
    main()

