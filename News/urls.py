from django.urls import path
from .views import (
    CreateNoticiaAPIView,
    ListNoticiasAPIView,
    EditNoticiaAPIView,
    DeleteNoticiaAPIView,
    IncrementViewsAPIView,
    DetailNoticiaAPIView,
    IncrementLikesAPIView
)

urlpatterns = [
    path('noticias/', ListNoticiasAPIView.as_view(), name='listar_noticias'),
    path('noticias/create/', CreateNoticiaAPIView.as_view(), name='criar_noticia'),
    path('noticias/<int:pk>/', DetailNoticiaAPIView.as_view(), name='noticia-detail'),
    path('noticias/<int:pk>/edit/', EditNoticiaAPIView.as_view(), name='editar_noticia'),
    path('noticias/<int:pk>/delete/', DeleteNoticiaAPIView.as_view(), name='apagar_noticia'),
    path('noticias/<int:pk>/add_view/', IncrementViewsAPIView.as_view(), name='adicionar_view'),
    path('noticias/<int:pk>/add_like/', IncrementLikesAPIView.as_view(), name='adicionar_like'),
]