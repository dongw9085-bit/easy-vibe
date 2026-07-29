from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .db import Base, SessionLocal, engine
from .pet_router import router as pet_router

app = FastAPI(title="收入预测系统 · 国内宠物 BU")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# seed：只补缺，永不覆盖已有行（改参数文案需删行重建后重启）
from .models_pet import seed_pet  # noqa: E402

_db = SessionLocal()
try:
    seed_pet(_db)
finally:
    _db.close()

app.include_router(pet_router)


@app.get("/api/health")
def health():
    return {"ok": True}
