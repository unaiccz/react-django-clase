from django.urls import path, include
from rest_framework import routers
from .views import Exview, Apunteview
router = routers.DefaultRouter()
router.register(r'api',Exview)
router.register(r'apunte',Apunteview)
urlpatterns = [
    path('api/', include(router.urls))
]
