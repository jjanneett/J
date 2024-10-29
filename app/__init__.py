# app/__init__.py
from flask import Flask

app = Flask(__name__)

from app import routes  # 이 코드로 라우트를 가져옵니다.
