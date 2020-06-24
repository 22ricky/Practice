import 'package:flutter/material.dart';
import './pages/home.dart';
import './pages/menu.dart';
import './pages/mail.dart';
import './pages/user.dart';

class Bottom extends StatefulWidget {
  @override
  _BottomState createState() => _BottomState();
}

class _BottomState extends State<Bottom> {
  final _color = Colors.lightBlue;
  int _currentIndex = 0;
  List<Widget> list = List();
  @override
  void initState() {
    list
      ..add(Home())
      ..add(Menu())
      ..add(Mail())
      ..add(User());
    super.initState();
  }
  Widget build(BuildContext context) {
    return Scaffold(
      body: list[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              color: _color,
            ),
            title: Text(
              'Home',
              style: TextStyle(color: _color),
            )
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.menu,
              color: _color,
            ),
            title: Text(
              'Menu',
              style: TextStyle(color: _color),
            )
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.mail,
              color: _color,
            ),
            title: Text(
              'Mail',
              style: TextStyle(color: _color),
            )
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.tag_faces,
              color: _color,
            ),
            title: Text(
              'User',
              style: TextStyle(color: _color),
            )
          ),
        ],
        currentIndex: _currentIndex,
        onTap: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}