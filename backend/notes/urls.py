from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('notes', views.NotesViewSet, basename='notes')

urlpatterns = [
]

urlpatterns += router.urls
