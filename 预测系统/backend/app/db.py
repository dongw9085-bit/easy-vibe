"""业务库连接。

默认使用本地 SQLite（预测系统/backend/data/pet.db），
生产环境通过环境变量 PET_DB_URL 指向 SQL Server 的 IncomeForecast 库，例如：
    PET_DB_URL="mssql+pyodbc://user:pwd@host/IncomeForecast?driver=ODBC+Driver+17+for+SQL+Server"
"""

import os
from pathlib import Path

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

DB_URL = os.environ.get("PET_DB_URL", f"sqlite:///{DATA_DIR / 'pet.db'}")

engine = create_engine(DB_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
