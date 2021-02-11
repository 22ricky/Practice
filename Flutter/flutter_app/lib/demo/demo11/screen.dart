import 'package:flutter/material.dart';
import 'index.dart';

class Screen extends StatefulWidget {
  @override
  _ScreenState createState() => _ScreenState();
}

class _ScreenState extends State<Screen> with SingleTickerProviderStateMixin {
  AnimationController _controller;
  Animation _animation;

  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: Duration(milliseconds: 3000));
    _animation = Tween(begin: 0.0, end: 1.0).animate(_controller);

    _animation.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(builder: (context) => Index()),
          (route) => route == null,
        );
      }
    });

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return FadeTransition(
      opacity: _animation,
      child: Image.network(
        'https://main.qcloudimg.com/raw/9dc4aba20c6572a61e161da7c2588940.jpg',
        scale: 2.0,
        fit: BoxFit.cover,
      ),
    );
  }
}