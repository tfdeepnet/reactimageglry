# save this as app.py
import imp
from flask import Flask
from other_module import fn_from_other_module

#fn_from_other_module()
print(__name__)

app = Flask(__name__)

#alternative approach
# def hello():
#   return "Hello, venv World!"

# app.route("/")(hello)

# main approach
@app.route("/")
def hello():
  return "Hello, venv World!"

if __name__ == "__main__":
  app.run(host="0.0.0.0", port="5050")