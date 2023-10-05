from django.urls import path, include
from rest_framework import routers
from .views import Exview
router = routers.DefaultRouter()
router.register(r'api',Exview)
urlpatterns = [
    path('api/', include(router.urls))
]
