import 'package:flutter/cupertino.dart';

class Index extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      child: Center(
        child: Container(
          width: 100.0,
          height: 100.0,
          color: CupertinoColors.activeBlue,
          child: CupertinoButton(
            child: Icon(CupertinoIcons.add),
            onPressed: () {
              Navigator.of(context).push(
                CupertinoPageRoute(builder: (BuildContext context) {
                  return Index();
                }),
              );
            },
          ),
        ),
      ),
    );
  }
}