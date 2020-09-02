Test 4
 0:55.22 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener::OpenFromParent
 0:55.22 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener ctor [this=0x7f87ccf3bdf0]
 0:55.22 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel ParentProcessDocumentOpenInfo ctor [this=0x7f87b1699800]
 0:55.24 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel ParentProcessDocumentOpenInfo OnStartRequest [this=0x7f87b1699800]
 0:55.24 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel ParentProcessDocumentOpenInfo OnDocumentStartRequest [this=0x7f87b1699800]
 0:55.24 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener OnStartRequest [this=0x7f87ccf3bdf0]
 0:55.24 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener MaybeTriggerProcessSwitch [this=0x7f87ccf3bdf0]
 0:55.24 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener GetRemoteTypeForPrincipal [this=0x7f87ccf3bdf0, contentParent=webIsolated=http://example.org, preferredRemoteType=webIsolated=http://example.org]
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel GetRemoteTypeForPrincipal -> current:webIsolated=http://example.org remoteType:webIsolated=https://example.com
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel Process Switch: Changing Remoteness from 'webIsolated=http://example.org' to 'webIsolated=https://example.com'
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener DisconnectListener [this=0x7f87ccf3bdf0, aStatus=804b0002 aLoadGroupStatus=804b0002 ]
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener Disconnect [this=0x7f87ccf3bdf0]
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel Process Switch: Calling ChangeRemoteness
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Stop() called
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: V/DocumentChannel DocumentChannel ctor [this=0x7f87ff36f9b0, uri=https://example.com/browser/browser/base/content/test/general/alltabslistener.html]
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: V/DocumentChannel DocumentChannelChild ctor [this=0x7f87ff36f9b0, uri=https://example.com/browser/browser/base/content/test/general/alltabslistener.html]
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: OnStartRequest[0x7f87ff36f9b0](documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html) mIsLoadingDocument=false, 1 active URLs
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: ++ Firing OnStateChange for start document load (...).        URI: documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: f0001
 0:55.25 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87ff366240: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: f0001
 0:55.25 GECKO(25925) [Child 26284: Main Thread]: D/BrowsingContext Creating 0x00000026 from IPC (origin=0x00000000)
 0:55.25 GECKO(25925) [Child 26284: Main Thread]: D/BrowsingContext Child: Connecting 0x00000026 to 0x00000000 (private=0, remote=1, fission=1, oa=)
 0:55.25 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- currently suspending progress events for browserParent=0x7f87b4410800
 0:55.25 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- uri=https://example.com/browser/browser/base/content/test/general/alltabslistener.html
 0:55.25 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- will resume progress events
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentChannelParent ctor [this=0x7f87b8c49100]
 0:55.25 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentChannelParent Init [this=0x7f87b8c49100, uri=https://example.com/browser/browser/base/content/test/general/alltabslistener.html]
 0:55.31 GECKO(25925) [26348, Unnamed thread 7f54761964c0] WARNING: XPCOM objects created/destroyed from static ctor/dtor: file /home/annyg/central/xpcom/base/nsTraceRefcnt.cpp, line 202
 0:55.31 GECKO(25925) ### XPCOM_MEM_BLOAT_LOG defined -- logging bloat/leaks to /tmp/tmplSv2Dj.mozrunner/runtests_leaks.log
 0:55.31 GECKO(25925) [26348, Unnamed thread 7f54761964c0] WARNING: XPCOM objects created/destroyed from static ctor/dtor: file /home/annyg/central/xpcom/base/nsTraceRefcnt.cpp, line 202
 0:55.31 GECKO(25925) [26348, Main Thread] WARNING: XPCOM_MEM_BLOAT_LOG is set, disabling native allocations.: file /home/annyg/central/tools/profiler/core/platform.cpp, line 246
 0:55.31 GECKO(25925) [26349, Unnamed thread 7f3e5c1964c0] WARNING: XPCOM objects created/destroyed from static ctor/dtor: file /home/annyg/central/xpcom/base/nsTraceRefcnt.cpp, line 202
 0:55.31 GECKO(25925) ### XPCOM_MEM_BLOAT_LOG defined -- logging bloat/leaks to /tmp/tmplSv2Dj.mozrunner/runtests_leaks.log
 0:55.31 GECKO(25925) [26349, Unnamed thread 7f3e5c1964c0] WARNING: XPCOM objects created/destroyed from static ctor/dtor: file /home/annyg/central/xpcom/base/nsTraceRefcnt.cpp, line 202
 0:55.31 GECKO(25925) [26349, Main Thread] WARNING: XPCOM_MEM_BLOAT_LOG is set, disabling native allocations.: file /home/annyg/central/tools/profiler/core/platform.cpp, line 246
 0:55.31 GECKO(25925) [26352, Unnamed thread 7fec97f964c0] WARNING: XPCOM objects created/destroyed from static ctor/dtor: file /home/annyg/central/xpcom/base/nsTraceRefcnt.cpp, line 202
 0:55.31 GECKO(25925) ### XPCOM_MEM_BLOAT_LOG defined -- logging bloat/leaks to /tmp/tmplSv2Dj.mozrunner/runtests_leaks.log
 0:55.31 GECKO(25925) [26352, Unnamed thread 7fec97f964c0] WARNING: XPCOM objects created/destroyed from static ctor/dtor: file /home/annyg/central/xpcom/base/nsTraceRefcnt.cpp, line 202
 0:55.31 GECKO(25925) [26352, Main Thread] WARNING: XPCOM_MEM_BLOAT_LOG is set, disabling native allocations.: file /home/annyg/central/tools/profiler/core/platform.cpp, line 246
 0:55.33 GECKO(25925) [Child 26348: Main Thread]: D/DocLoader DocLoader:0x7f54761663e0: created.
 0:55.33 GECKO(25925) [Child 26348: Main Thread]: D/DocLoader DocLoader:0x7f54761663e0: load group 0x7f547613f120.
 0:55.34 GECKO(25925) [Child 26349: Main Thread]: D/DocLoader DocLoader:0x7f3e5c166240: created.
 0:55.34 GECKO(25925) [Child 26349: Main Thread]: D/DocLoader DocLoader:0x7f3e5c166240: load group 0x7f3e5c13f120.
 0:55.34 GECKO(25925) [Child 26352: Main Thread]: D/DocLoader DocLoader:0x7fec97f66240: created.
 0:55.34 GECKO(25925) [Child 26352: Main Thread]: D/DocLoader DocLoader:0x7fec97f66240: load group 0x7fec97f3f120.
 0:55.41 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3bf9c00: OnStartRequest[0x7f87c78dd660](about:document-onload-blocker) mIsLoadingDocument=false, 1 active URLs
 0:55.41 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3bf9c00: ++ Firing OnStateChange start url load (...).    URI: about:document-onload-blocker
 0:55.41 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3bf9c00: Status (about:document-onload-blocker): code: 10001
 0:55.41 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3b77120: Status (about:document-onload-blocker): code: 10001
 0:55.41 GECKO(25925) [Parent 25925: Main Thread]: D/BrowsingContext SetOwnerProcessId for 0x00000026 (0x0000000a -> 0x00000009)
 0:55.41 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: created.
 0:55.41 GECKO(25925) [Child 26284: Main Thread]: I/DocShellAndDOMWindowLeak ++DOCSHELL 0x7fb0a811dc00 == 2 [pid = 26284] [id = {be167d61-609d-41af-b4cf-a341fe0a7c80}]
 0:55.41 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: load group 0x7fb0aa7ca7a0.
 0:55.41 GECKO(25925) [Child 26284, Main Thread] WARNING: NS_ENSURE_TRUE(browserChrome) failed: file /home/annyg/central/docshell/base/nsDocShell.cpp, line 11779
 0:55.41 GECKO(25925) [Child 26284: Main Thread]: I/DocShellAndDOMWindowLeak ++DOMWINDOW == 4 (0x7fb0c7d6a7d0) [pid = 26284] [serial = 4] [outer = (nil)]
 0:55.42 GECKO(25925) [Child 26284: Main Thread]: I/DocShellAndDOMWindowLeak ++DOMWINDOW == 5 (0x7fb0a811ec00) [pid = 26284] [serial = 5] [outer = 0x7fb0c7d6a7d0]
 0:55.42 GECKO(25925) ANNY -- will suspend progress events for bc=0x00000026 browserParent=0x7f87b440b000
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Stop() called
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: V/DocumentChannel DocumentChannel ShutdownListeners [this=0x7f87ff36f9b0, status=804b0002]
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: OnStopRequest[0x7f87ff36f9b0](documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html) status=804b0002 mIsLoadingDocument=true, mDocumentOpenedButNotLoaded=false, 0 active URLs
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: ++ Firing OnStateChange for end url load (...).    URI: documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html status=804b0002
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 10010
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87ff366240: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 10010
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Is now idle...
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: ++ Firing OnStateChange for end document load (...).    URI: documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html Status=804b0002
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 20010
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87ff366240: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 20010
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: c0010
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87ff366240: Status (documentchannel:https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: c0010
 0:55.43 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Stop() called
 0:55.44 GECKO(25925) [Child 26316: Main Thread]: D/BrowsingContext Child: Preparing 0x00000026 for a process change
 0:55.48 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader [0x7fb0a811dc00] calling 0x7fb0aa7a1a98->OnLocationChange to about:blank 0
 0:55.48 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader [0x7fb0a811dc00] calling 0x7fb0a811ddc0->OnLocationChange to about:blank 0
 0:55.50 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Stop() called
 0:55.51 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3bf9c00: OnStopRequest[0x7f87c78dd660](about:document-onload-blocker) status=0 mIsLoadingDocument=false, mDocumentOpenedButNotLoaded=false, 0 active URLs
 0:55.51 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3bf9c00: ++ Firing OnStateChange for end url load (...).    URI: about:document-onload-blocker status=0
 0:55.51 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3bf9c00: Status (about:document-onload-blocker): code: 10010
 0:55.51 GECKO(25925) [Parent 25925: Main Thread]: D/DocLoader DocLoader:0x7f87f3b77120: Status (about:document-onload-blocker): code: 10010
 0:55.51 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentChannelParent dtor [this=0x7f87b8c49100]
 0:55.51 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener::TriggerRedirectToRealChannel [this=0x7f87ccf3bdf0] aDestinationProcess=9
 0:55.52 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener RedirectToRealChannel [this=0x7f87ccf3bdf0] aRedirectFlags=4, aLoadFlags=390004
 0:55.52 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Stop() called
 0:55.52 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: OnStartRequest[0x7fb0a815f080](https://example.com/browser/browser/base/content/test/general/alltabslistener.html) mIsLoadingDocument=false, 1 active URLs
 0:55.52 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: ++ Firing OnStateChange for start document load (...).        URI: https://example.com/browser/browser/base/content/test/general/alltabslistener.html
 0:55.52 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: f0001
 0:55.52 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: f0001
 0:55.53 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- currently suspending progress events for browserParent=0x7f87b440b000
 0:55.53 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- uri=https://example.com/browser/browser/base/content/test/general/alltabslistener.html
 0:55.53 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- will resume progress events
 0:55.53 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener RedirectToRealChannelFinished [this=0x7f87ccf3bdf0, aRv=0 ]
 0:55.53 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener FinishReplacementChannelSetup [this=0x7f87ccf3bdf0, aResult=0]
 0:55.53 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener ResumeSuspendedChannel [this=0x7f87ccf3bdf0]
 0:55.53 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel DocumentLoadListener dtor [this=0x7f87ccf3bdf0]
 0:55.54 GECKO(25925) [Child 26284: Main Thread]: I/DocShellAndDOMWindowLeak ++DOMWINDOW == 6 (0x7fb0a8121800) [pid = 26284] [serial = 6] [outer = 0x7fb0c7d6a7d0]
 0:55.55 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87ff366240: Stop() called
 0:55.55 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87ff366240: deleted.
 0:55.55 GECKO(25925) [Parent 25925: Main Thread]: V/DocumentChannel ParentProcessDocumentOpenInfo dtor [this=0x7f87b1699800]
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader [0x7fb0a811dc00] calling 0x7fb0a8158288->OnLocationChange to https://example.com/browser/browser/base/content/test/general/alltabslistener.html 0
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader [0x7fb0a811dc00] calling 0x7fb0aa7a1a98->OnLocationChange to https://example.com/browser/browser/base/content/test/general/alltabslistener.html 0
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader [0x7fb0a811dc00] calling 0x7fb0a811ddc0->OnLocationChange to https://example.com/browser/browser/base/content/test/general/alltabslistener.html 0
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: OnStartRequest[0x7fb0aa7f8dc0](about:document-onload-blocker) mIsLoadingDocument=true, 2 active URLs
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: ++ Firing OnStateChange start url load (...).    URI: about:document-onload-blocker
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (about:document-onload-blocker): code: 10001
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (about:document-onload-blocker): code: 10001
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 30004
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 30004
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Progress (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): curSelf: 117 maxSelf: 117 curTotal: 117 maxTotal 117
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Progress (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): curSelf: 117 maxSelf: 117 curTotal: 117 maxTotal 117
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: OnStopRequest[0x7fb0a815f080](https://example.com/browser/browser/base/content/test/general/alltabslistener.html) status=0 mIsLoadingDocument=true, mDocumentOpenedButNotLoaded=false, 1 active URLs
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: ++ Firing OnStateChange for end url load (...).    URI: https://example.com/browser/browser/base/content/test/general/alltabslistener.html status=0
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 10010
 0:55.60 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 10010
 0:55.65 INFO AllProgress: onLocationChange https://example.com/browser/browser/base/content/test/general/alltabslistener.html
 0:55.65 PASS onLocationChange notification came from the correct browser -
 0:55.65 PASS Got an expected notification for the all notifications listener - 0 < 4 -
 0:55.66 FAIL Got a notification for the all notifications listener - Got "onLocationChange", expected "onStateChange"
Stack trace:
chrome://mochikit/content/browser-test.js:test_is:1332
chrome://mochitests/content/browser/browser/base/content/test/general/browser_alltabslistener.js:onLocationChange:141
chrome://browser/content/tabbrowser.js:callListeners:832
chrome://browser/content/tabbrowser.js:_callProgressListeners:852
chrome://browser/content/tabbrowser.js:_callProgressListeners:5826
chrome://browser/content/tabbrowser.js:onLocationChange:6239
 0:55.66 INFO AllProgress (null): onSecurityChange 0x2
 0:55.66 PASS onSecurityChange notification came from the correct browser -
 0:55.67 PASS Got an expected notification for the all notifications listener - 1 < 4 -
 0:55.67 FAIL Got a notification for the all notifications listener - Got "onSecurityChange", expected "onLocationChange"
Stack trace:
chrome://mochikit/content/browser-test.js:test_is:1332
chrome://mochitests/content/browser/browser/base/content/test/general/browser_alltabslistener.js:onSecurityChange:166
chrome://browser/content/tabbrowser.js:callListeners:832
chrome://browser/content/tabbrowser.js:_callProgressListeners:852
chrome://browser/content/tabbrowser.js:_callProgressListeners:5826
chrome://browser/content/tabbrowser.js:onSecurityChange:6279
 0:55.70 GECKO(25925) [Child 26316: Main Thread]: V/DocumentChannel DocumentChannelChild dtor [this=0x7f87ff36f9b0]
 0:55.84 GECKO(25925) Couldn't convert chrome URL: chrome://branding/locale/brand.properties
 0:55.84 GECKO(25925) [Child 26349, Main Thread] WARNING: Could not get the program name for a cubeb stream.: 'NS_SUCCEEDED(rv)', file /home/annyg/central/dom/media/CubebUtils.cpp, line 378
 0:55.86 GECKO(25925) Couldn't convert chrome URL: chrome://branding/locale/brand.properties
 0:55.86 GECKO(25925) [Child 26352, Main Thread] WARNING: Could not get the program name for a cubeb stream.: 'NS_SUCCEEDED(rv)', file /home/annyg/central/dom/media/CubebUtils.cpp, line 378
 0:55.87 INFO Console message: [JavaScript Error: "The character encoding of the HTML document was not declared. The document will render with garbled text in some browser configurations if the document contains characters from outside the US-ASCII range. The character encoding of the page must be declared in the document or in the transfer protocol." {file: "https://example.com/browser/browser/base/content/test/general/alltabslistener.html" line: 0}]
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: OnStopRequest[0x7fb0aa7f8dc0](about:document-onload-blocker) status=0 mIsLoadingDocument=true, mDocumentOpenedButNotLoaded=false, 0 active URLs
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: ++ Firing OnStateChange for end url load (...).    URI: about:document-onload-blocker status=0
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (about:document-onload-blocker): code: 10010
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (about:document-onload-blocker): code: 10010
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Is now idle...
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: ++ Firing OnStateChange for end document load (...).    URI: https://example.com/browser/browser/base/content/test/general/alltabslistener.html Status=0
 0:55.90 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 20010
 0:55.90 GECKO(25925) [Child 26316: Main Thread]: I/DocShellAndDOMWindowLeak --DOCSHELL 0x7f87df506400 == 0 [pid = 26316] [id = {be167d61-609d-41af-b4cf-a341fe0a7c80}] [url = http://example.org/browser/browser/base/content/test/general/alltabslistener.html]
 0:55.90 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: Stop() called
 0:55.90 GECKO(25925) [Child 26316: Main Thread]: D/DocLoader DocLoader:0x7f87df506400: deleted.
 0:55.92 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: 20010
 0:55.92 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0a811dc00: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: c0010
 0:55.92 GECKO(25925) [Child 26284: Main Thread]: D/DocLoader DocLoader:0x7fb0c7d66240: Status (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): code: c0010
 0:55.92 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- NOT suspending any progress events for browserParent=0x7f87b440b000
 0:55.92 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- about to dispatch onStateChange
 0:55.93 INFO AllProgress (https://example.com/browser/browser/base/content/test/general/alltabslistener.html): onStateChange 0xc0010
 0:55.93 PASS onStateChange notification came from the correct browser -
 0:55.94 PASS Got an expected notification for the all notifications listener - 2 < 4 -
 0:55.95 FAIL Got a notification for the all notifications listener - Got "onStateChange", expected "onSecurityChange"
Stack trace:
chrome://mochikit/content/browser-test.js:test_is:1332
chrome://mochitests/content/browser/browser/base/content/test/general/browser_alltabslistener.js:onStateChange:102
chrome://browser/content/tabbrowser.js:callListeners:832
chrome://browser/content/tabbrowser.js:_callProgressListeners:852
chrome://browser/content/tabbrowser.js:_callProgressListeners:5826
chrome://browser/content/tabbrowser.js:onStateChange:6099
 0:55.95 FAIL Saw the expected number of notifications - Got 3, expected 4
Stack trace:
chrome://mochikit/content/browser-test.js:test_is:1332
chrome://mochitests/content/browser/browser/base/content/test/general/browser_alltabslistener.js:onStateChange:110
chrome://browser/content/tabbrowser.js:callListeners:832
chrome://browser/content/tabbrowser.js:_callProgressListeners:852
chrome://browser/content/tabbrowser.js:_callProgressListeners:5826
chrome://browser/content/tabbrowser.js:onStateChange:6099
 0:55.95 PASS Saw the expected number of frontnotifications -
 0:55.96 GECKO(25925) ANNY -- BrowserParent::RecvOnStateChange -- dispatched onStateChange
 0:55.96 INFO
