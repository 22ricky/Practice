import 'package:flutter/material.dart';

class Index extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tooltip Demo'),
      ),
      body: Center(
        child: Tooltip(
          message: 'Tooltip',
          child: Icon(Icons.all_inclusive),
        ),
      ),
    );
  }
}