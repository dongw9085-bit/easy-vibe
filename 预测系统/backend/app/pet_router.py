"""宠物 BU API。全部每次请求现算（无缓存）：改参数 → PUT → 重新 GET 即生效。单位一律万元。"""

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session

from .compute_pet import compute, compute_pet_matrix, compute_pet_sku
from .db import get_db
from .models_pet import PetParam

router = APIRouter(prefix="/api/pet", tags=["pet"])


class ParamBody(BaseModel):
    value: str


@router.get("/params")
def list_params(db: Session = Depends(get_db)):
    rows = db.query(PetParam).order_by(PetParam.group, PetParam.key).all()
    return [
        {
            "key": p.key,
            "value": p.value,
            "label": p.label,
            "group": p.group,
            "unit": p.unit,
            "note": p.note,
        }
        for p in rows
    ]


@router.put("/params/{key}")
def update_param(key: str, body: ParamBody, db: Session = Depends(get_db)):
    p = db.get(PetParam, key)
    if p is None:
        raise HTTPException(status_code=404, detail=f"参数不存在: {key}")
    p.value = body.value
    db.commit()
    return {"key": key, "value": p.value}


@router.get("/summary")
def summary(db: Session = Depends(get_db)):
    return compute(db)


@router.get("/matrix")
def matrix(db: Session = Depends(get_db)):
    return compute_pet_matrix(db)


@router.get("/sku")
def sku(province: str | None = None, device_type: str | None = None, db: Session = Depends(get_db)):
    return compute_pet_sku(db, province=province, device_type=device_type)
