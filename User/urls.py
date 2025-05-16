from django.urls import path
from . import views
from .views import login_view, user_view

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login_view/', views.login_view, name='login_view'),
    path('logout_view/', views.logout_view, name='logout_view'),
    path('user/me/', views.user_view),
    path('login/', login_view, name='login'),



]
