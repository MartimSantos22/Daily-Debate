from django.urls import path
from .views import (
    CreateNoticiaAPIView,
    ListNoticiasAPIView,
    EditNoticiaAPIView,
    DeleteNoticiaAPIView,
)

urlpatterns = [
    path('noticias/', ListNoticiasAPIView.as_view(), name='listar_noticias'),
    path('noticias/create/', CreateNoticiaAPIView.as_view(), name='criar_noticia'),
    path('noticias/<int:pk>/edit/', EditNoticiaAPIView.as_view(), name='editar_noticia'),
    path('noticias/<int:pk>/delete/', DeleteNoticiaAPIView.as_view(), name='apagar_noticia'),
]
